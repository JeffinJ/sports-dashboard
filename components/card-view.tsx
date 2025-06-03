"use dom"
import { Text } from "react-native";
import "../global.css";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


export default function CardView() {

    return (
        <Card className="w-full max-w-sm p-10 h-full">
            <CardHeader>
                <CardTitle>
                    <Text>
                        Login to your account
                    </Text>
                </CardTitle>
                <CardDescription>
                    <Text>
                        Enter your email below to login to your account
                    </Text>
                </CardDescription>
            </CardHeader>
            <CardContent>

                <Button type="button" variant={"destructive"} className="bg-green-500">
                    CLICK
                </Button>
            </CardContent>
            <CardFooter className="flex-col gap-2">

            </CardFooter>
        </Card>
    )
}