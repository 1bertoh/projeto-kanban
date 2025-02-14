'use client'

import React from "react";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarContent,
  User,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {

  const items = [
    {
      key: "user",
      label: "Meus dados",
      link: "#",
    },
    {
      key: "users",
      label: "Usuários",
      link: "/usuarios",
    },
    {
      key: "clientes",
      label: "Clientes",
      link: "/clientes",
    },
    {
      key: "crm",
      label: "CRM",
      link: "/crm/configurar",
    },
    {
      key: "delete",
      label: "Sair",
      link: "/home",
    },
  ];

  return (
    <NavbarUi maxWidth="full">
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <a href={'/home'} className="cursor-pointer">
            <p className="font-bold text-inherit">C3 CRM</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="start">
        <NavbarBrand>
          <a href="/home">
            <p className="font-bold text-inherit">C3 CRM</p>
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex " justify="end">
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name="Jane Doe"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="light">
              Menu 
              <ChevronDown/>  
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" items={items}>
            {(item) => (
              <DropdownItem
                key={item.key}
                className={item.key === "delete" ? "text-danger" : ""}
                color={item.key === "delete" ? "danger" : "default"}
              >
                <Link href={item.link!}>
                {item.label}
                </Link>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NavbarUi>
  );
}

