import { Schema, model } from 'mongoose';

const maintenanceSchema = new Schema({
    workshop: {
        type: [Schema.Types.ObjectId],
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: [Schema.Types.ObjectId],
        ref: 'Vehicle',
        required: true
    },
    services: [{
        name: {
            type: String,
            required: true},
        price: {
            type: Number,
            required: true}
    }],
    data: {
        type: Date,
        required: true
    },
    totalCoast: {
        type: Number,
        required: true
    },
});

export default model('Maintenance', maintenanceSchema);