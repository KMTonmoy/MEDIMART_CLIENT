'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, Pill, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // LG breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [
    { name: "Prescription", slug: "prescription" },
    { name: "OTC Medicines", slug: "otc" },
    { name: "Wellness", slug: "wellness" },
    { name: "Personal Care", slug: "personal-care" },
    { name: "Health Devices", slug: "devices" },
    { name: "Ayurvedic", slug: "ayurvedic" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Prescription", href: "/prescription" },
    { name: "Doctors", href: "/doctors" },
    { name: "Health Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const cartItems = 3;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        {/* Top Bar */}
        <div className="bg-emerald-900 text-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="hidden md:inline">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/track-order" className="hover:text-emerald-200">
                  Track Order
                </Link>
                <span className="hidden md:inline">|</span>
                <Link
                  href="/health-tips"
                  className="hidden md:block hover:text-emerald-200"
                >
                  Health Tips
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Pill className="h-8 w-8 text-emerald-600" />
                <Link href="/" className="text-2xl font-bold">
                  <span className="text-emerald-700">Medi</span>
                  <span className="text-emerald-900">Mart</span>
                </Link>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden flex-1 max-w-2xl mx-8 lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search medicines, health products..."
                  className="pl-10 pr-4 py-2 rounded-full border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                {isSearchVisible ? (
                  <X className="h-5 w-5 text-emerald-600" />
                ) : (
                  <Search className="h-5 w-5 text-emerald-600" />
                )}
              </Button>

              {/* User Account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden md:flex items-center space-x-2"
                  >
                    <User className="h-5 w-5 text-emerald-600" />
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-medium">Hello, User</p>
                      <p className="text-xs text-gray-500">Account & Orders</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders" className="w-full">
                      My Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/prescriptions" className="w-full">
                      My Prescriptions
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/addresses" className="w-full">
                      Saved Addresses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="/login"
                      className="w-full text-emerald-600 font-medium"
                    >
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <Button variant="ghost" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5 text-emerald-600" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                  <span className="hidden lg:inline ml-2">Cart</span>
                </Link>
              </Button>

              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={link.name}>
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <div className="p-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                      onClick={() => setIsSearchVisible(true)}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Search Medicines
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Categories Menu - Desktop Only */}
          <div className="hidden lg:flex items-center justify-between mt-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-emerald-700 hover:text-emerald-800">
                    Shop by Category
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/category/${category.slug}`}
                          className="block p-2 hover:bg-emerald-50 rounded-md hover:text-emerald-700"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.slice(1, 5).map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600">
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                💊 100% Genuine
              </Badge>
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                🔒 Secure
              </Badge>
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                🚚 Free Delivery
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Search Bar */}
      {isMobile && isSearchVisible && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg p-4 animate-in slide-in-from-bottom duration-300">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />
            <Input
              type="search"
              placeholder="Search medicines, health products..."
              className="pl-10 pr-10 py-3 rounded-lg border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2"
              onClick={() => setIsSearchVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {/* Quick Search Suggestions */}
          <div className="mt-3 space-y-2">
            <p className="text-xs text-gray-500 font-medium">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Paracetamol",
                "Vitamin C",
                "Diabetes",
                "Cough Syrup",
                "First Aid",
              ].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 text-sm bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition"
                  onClick={() => {
                    // Handle search term click
                    console.log(`Searching for: ${term}`);
                    setIsSearchVisible(false);
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      {isMobile && !isSearchVisible && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg">
          <div className="flex items-center justify-around px-2 py-3">
            {/* Home */}
            <Link
              href="/"
              className="flex flex-col items-center space-y-1 text-emerald-700"
            >
              <div className="h-6 w-6 flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-xs">Home</span>
            </Link>

            {/* Categories */}
            <Link
              href="/categories"
              className="flex flex-col items-center space-y-1 text-gray-600 hover:text-emerald-700"
            >
              <div className="h-6 w-6 flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <span className="text-xs">Categories</span>
            </Link>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchVisible(true)}
              className="flex flex-col items-center space-y-1 text-gray-600 hover:text-emerald-700"
            >
              <div className="h-12 w-12 -mt-6 flex items-center justify-center rounded-full bg-emerald-600 shadow-lg">
                <Search className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs mt-1">Search</span>
            </button>

            {/* Prescription */}
            <Link
              href="/prescription"
              className="flex flex-col items-center space-y-1 text-gray-600 hover:text-emerald-700"
            >
              <div className="h-6 w-6 flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-xs">Prescription</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex flex-col items-center space-y-1 text-gray-600 hover:text-emerald-700 relative"
            >
              <div className="h-6 w-6 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 right-4 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
              <span className="text-xs">Cart</span>
            </Link>
          </div>
        </div>
      )}

      {/* Add padding to bottom for mobile navigation */}
      {isMobile && <div className="h-16 lg:h-0"></div>}
    </>
  );
};

export default Navbar;
