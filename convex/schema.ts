import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
  }),
  
  blogs: defineTable({
    title: v.string(),
    content: v.string(),
    excerpt: v.string(),
    publishedAt: v.number(),
    tags: v.array(v.string()),
  }),
  
  gallery: defineTable({
    title: v.string(),
    imageUrl: v.string(),
    description: v.optional(v.string()),
    category: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
