import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tours = pgTable("tours", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  tier: text("tier").notNull(), // 'basic', 'premium', 'executive'
  features: text("features").array(),
});

export const places = pgTable("places", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertTourSchema = createInsertSchema(tours).omit({ id: true });
export const insertPlaceSchema = createInsertSchema(places).omit({ id: true });

export type Tour = typeof tours.$inferSelect;
export type Place = typeof places.$inferSelect;
