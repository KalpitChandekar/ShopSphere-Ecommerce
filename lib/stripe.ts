import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIP_SECRET_KEY!);
