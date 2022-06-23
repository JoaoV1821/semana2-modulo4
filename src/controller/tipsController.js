import { TipsModel } from "../model/tipsModel.js";
import { bd } from "../infra/bd.js";

export const tipsGet = (app) => {
    
    app.get('/tips', (request, response) => {
        const nums = [];

        for (let i=0; i<=bd.descriptions.length; i++) {
            nums.push(i);
        }
        const  tipAleatorio = Math.floor(Math.random() * nums.length);

        response.send(bd.descriptions[tipAleatorio]);
    });

    app.post('/tips', (request, response) => {
        const body = request.body;
        const tips = new TipsModel(body.descriptions);
        
        bd.descriptions.push(tips);
        response.send(tips);
    });
};
