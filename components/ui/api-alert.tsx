"use client";

import toast from "react-hot-toast";
import { Copy, Server } from "lucide-react"

import { Button } from "@/components/ui/button";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "public",
    admin: "Admin",
}

const varientMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive",
}

export const ApiAlert = ({
    title,
    description,
    variant = "public",
}: ApiAlertProps) => {

    const onCopy = (description: string) => {
        navigator.clipboard.writeText(description);
        toast.success("Api route copied to the clipboard.");
    }

    return (
        <>
            <Alert>
                <Server className="h-4 w-4" />
                <AlertTitle className="flex items-center gap-x-2">
                    {title}
                    <Badge variant={varientMap[variant]}>{textMap[variant]}</Badge>
                </AlertTitle>
                <AlertDescription className="mt-4 flex items-center justify-between">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        {description}
                    </code>
                    <Button variant="outline" size={"icon"} onClick={()=>{onCopy(description)}} >
                        <Copy className="h-4 w-4"/>
                    </Button>
                </AlertDescription>
            </Alert>
        </>
    )
}