"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/app/components/themetoggle";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      
      
        
        {/* Products Section */}
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Templates"
              href="/template"
              src="/web.jpg"
              description="Ready-made designs for websites"
            />
            <ProductItem
              title="Graphic Bundles"
              href="/grapicpage"
              src="/graphic.jpg"
              description="Collections of icons, illustrations, and design assets."
            />
            <ProductItem
              title="Chrome Extensions"
              href="/cepage"
              src="/chrome.jpg"
              description="Add-ons that extend Chrome browser functionality"
            />
            <ProductItem
              title="API"
              href="/apipage"
              src="/api.jpg"
              description="Interfaces for integrating third-party functionalities."
            />
            <ProductItem
              title="SAAS"
              href="/saaspage"
              src="/saas.jpeg"
              description="Applications and software solutions for specific tasks."
            />
            <ProductItem
              title="Plugins"
              href="/plugin"
              src="/plugins.jpg"
              description="Components that enhance and expand software applications."
            />
          </div>
        </MenuItem>
        
        {/* Pricing Section */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        
        {/* Sign In/Up Buttons */}
        <MenuItem setActive={setActive} active={active} item="Get-Started">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/signin" className="text-lg font-semibold">Sign In</HoveredLink>
          <HoveredLink href="/signup" className="text-lg font-semibold">Sign Up</HoveredLink>
          </div>
        </MenuItem>

        
    
       
     

      </Menu>
    </div>
  );
}
