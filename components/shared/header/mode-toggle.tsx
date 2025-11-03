'use client';
import React, {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuContent, 
    DropdownMenuCheckboxItem} from "@/components/ui/dropdown-menu";
import {SunIcon, MoonIcon, SunMoon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ModeToggle(){
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                      {theme === "system" ? (<SunMoon/>) : 
                     theme === "light" ? (<SunIcon/>) : 
                     theme === "doom" ? (<span>💀</span>) : 
                     (<MoonIcon/>)}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                className=""
                checked={theme === "light"}
                onClick={() => setTheme("light")}
                >
                Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                className=""
                checked={theme === "dark"}
                onClick={() => setTheme("dark")}
                >
                Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                className=""
                checked={theme === "system"}
                onClick={() => setTheme("system")}
                >
                System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                className=""
                checked={theme === "doom"}
                onClick={() => setTheme("doom")}
                >
                doom
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}