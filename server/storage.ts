import { tours, places, type Tour, type Place, type InsertTour, type InsertPlace } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getTours(): Promise<Tour[]>;
  getTour(id: number): Promise<Tour | undefined>;
  getPlaces(): Promise<Place[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getTours(): Promise<Tour[]> {
    return await db.select().from(tours);
  }

  async getTour(id: number): Promise<Tour | undefined> {
    const [tour] = await db.select().from(tours).where(eq(tours.id, id));
    return tour;
  }

  async getPlaces(): Promise<Place[]> {
    return await db.select().from(places);
  }

  async seedData(): Promise<void> {
    const existingTours = await this.getTours();
    if (existingTours.length === 0) {
      await db.insert(tours).values([
        {
          name: "Basic Package",
          price: 50,
          description: "A comfortable 2-hour tour covering the essential highlights of the local area. Perfect for a quick overview.",
          tier: "basic",
          features: ["2 Hours Duration", "Standard Sedan", "English Speaking Driver", "Fixed Itinerary"]
        },
        {
          name: "Premium Package",
          price: 75,
          description: "An extended 4-hour tour allowing for deeper exploration and photo opportunities at scenic spots.",
          tier: "premium",
          features: ["4 Hours Duration", "Executive Sedan", "Flexible Stops", "Water Included", "History Guide"]
        },
        {
          name: "Executive Package",
          price: 100,
          description: "The ultimate VIP full-day experience with luxury transport and complete itinerary customization.",
          tier: "executive",
          features: ["Full Day (8 Hours)", "Luxury Mercedes", "Private Concierge", "Champagne Service", "Unlimited Stops"]
        }
      ]);
    }

    const existingPlaces = await this.getPlaces();
    if (existingPlaces.length === 0) {
      await db.insert(places).values([
        {
          name: "Valletta City Gate",
          description: "The majestic entrance to Malta's capital, a UNESCO World Heritage site known for its baroque architecture.",
          imageUrl: "/assets/stock_images/valletta_malta_histo_239f914a.jpg"
        },
        {
          name: "Mdina Old City",
          description: "The silent city, offering breathtaking views and a labyrinth of narrow, history-filled streets.",
          imageUrl: "/assets/stock_images/mdina_malta_old_city_4eb6e89f.jpg"
        },
        {
          name: "Blue Grotto",
          description: "A stunning natural sea cave system with brilliant blue waters, perfect for boat trips and photography.",
          imageUrl: "/assets/stock_images/blue_grotto_malta_se_a313f8db.jpg"
        },
        {
          name: "Hagar Qim Temples",
          description: "Ancient megalithic temple complex dating back to the Ggantija phase (3600-3200 BC).",
          imageUrl: "/assets/stock_images/hagar_qim_temples_ma_1de36ff8.jpg"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
