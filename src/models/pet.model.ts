import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const PetSchema = new Schema({
    id: ObjectId,
    breed: {
        type: String,
        required: true,
    },
    life_span: {
        type: String,
        required: true,
    },
    breed_traits: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    temperament: {
        type: String,
        required: true,
    },
    intelligence: {
        type: String,
        required: true,
    },
    breed_group: {
        type: String,
        required: true,
    },
    breed_size: {
        type: String,
        required: true,
    },
    breed_characteristics: {
        type: Object,
        required: true,
    },
    fun_facts: {
        type: Array,
        required: false,
    },
    weight: {
        type: Object,
        required: true,
        male: {
            type: Object,
            required: true,
            kg: {
                type: String,
            },
            pounds: {
                type: String,
            }
        },
        female: {
            type: Object,
            required: true,
            kg: {
                type: String,
            },
            pounds: {
                type: String,
            }
        },
    },
    images: {
        type: Object,
        required: true,
        profile: {
            type: Array,
            required: true,
        },
        puppies: {
            type: Array,
            require: true,
        },
        gallery: {
            type: Array,
            required: true,
        }
    },
});

export const Pet = mongoose.model("Pet", PetSchema);