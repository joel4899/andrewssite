import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await storage.seedData();

  app.get(api.tours.list.path, async (_req, res) => {
    const tours = await storage.getTours();
    res.json(tours);
  });

  app.get(api.tours.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(404).json({ message: "Invalid ID" });
      return;
    }
    const tour = await storage.getTour(id);
    if (!tour) {
      res.status(404).json({ message: "Tour not found" });
      return;
    }
    res.json(tour);
  });

  app.get(api.places.list.path, async (_req, res) => {
    const places = await storage.getPlaces();
    res.json(places);
  });

  return httpServer;
}
