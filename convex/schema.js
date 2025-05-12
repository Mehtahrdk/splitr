import {defineSchema,defineTable } from "convex/sever";
import { V } from "convex/values";

export default defineSchema({

    users:defineTable({
        name:V.string(),
        email:V.string(),
        tokeIdentifier:V.string(),
        imageUrl:V.optional(V.string())

    })
})