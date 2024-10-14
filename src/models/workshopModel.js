import { Schema, model } from 'mongoose';

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    },
    specialties : {
        type: [String],
        required: true
    }
});

export default model('Workshop', workshopSchema);