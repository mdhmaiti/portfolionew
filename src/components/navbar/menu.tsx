"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
 //import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MyImg from "../ball/MyImg"





 const components: { title: string; href: string; description: string; }[] = [
  {
    title: "Linkdin",
    href: "https://www.linkedin.com/in/medhashis-maiti-3197881a8/",
    description:
      "Linkdin profile.",
  },
  {
    title: "Github",
    href: "https://github.com/mdhmaiti",
    description:
      "Github link for the projects. ",
  },
  {
    title: " Blog-Hashnode",
    href: "https://medhashis.hashnode.dev",
    description:
      "Occasionally write blog articles on hashnode.",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/medhashis",
    description: "tweet",
  },
  {
    title: "email",
    href: "/mail",
    
    description: " address : medhashis000@gmail.com. ph no :- 8013381433",
  },
  // {
  //   title: "Tooltip",
  //   href: "/docs/",
  //   description:
  //     "A popup that displays mouse hovers over it.",
  // },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                 
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <MyImg/>
                      Medhashis Maiti
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Please feel free to contact me if you would like to learn more about my work.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/About" title="Introduction">
                  Self motivated and passionate about development.
              </ListItem>
              <ListItem href="/About" title="Skills / Projects">
                Always learning and growing. For more projects click on git hub under contact section.
              </ListItem>
              <ListItem href="/About" title="Education.">
                Education History.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contacts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  
                  
                >
                  
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
      <Link legacyBehavior href={props.href || "/"} passHref>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";




 