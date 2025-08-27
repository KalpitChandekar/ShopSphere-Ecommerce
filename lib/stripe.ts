import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPe_SECRET_KEY!);
