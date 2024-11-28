import { NextResponse } from "next/server";
import connectToMongoDb from "@/libs/mongodb";
import Id from "@/models/Id";

connectToMongoDb()
export async function POST(req){
    try {
        const {email , password } = await req.json()
        const existingUser = await Id.findOne({email})

        if(existingUser){
            return new NextResponse("Email is already in use" , {status:400})
        }

        const newUser = new Id({
            email,
            password,
        })
        await newUser.save()
        return new NextResponse("user Created" , {status:201})
    } catch (error) {
        return new NextResponse(error.message, {status:401})
    }
}