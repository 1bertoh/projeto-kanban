'use client'
import { ChevronDown, HomeIcon, InboxIcon, MoreHorizontal } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { useState } from "react"
import { Divider } from "@heroui/react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { List, lists, Project, projects } from "./_data"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Menu items.
const items = [
  {
    nome: '',
    submenus: [
      {
        title: "Início",
        url: "/home",
        icon: HomeIcon,
      },
      {
        title: "Caixa de Entrada",
        url: "/inbox",
        icon: InboxIcon,
      },
    ],
  },
]

const projeto = {
  nome: 'Projetos',
  projetos: projects.map((p) => {
    return {
      projeto: p,
      listas: lists.filter((l) => l.projectId === p.id)
    }
  })
}

export function AppSidebar() {
  return (
    <Sidebar
      className="overflow-hidden"
      collapsible="icon"
    >
      <SidebarHeader className="py-5 w-full">
        <Select value="c3" >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sistemas" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Sistema</SelectLabel> */}
              <SelectItem defaultChecked value="c3">C3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SidebarHeader>
      <Divider />
      <SidebarContent className="pt-5">
        {
          items.map((item) => (
            <SidebarGroup key={item.nome}>
              <SidebarGroupLabel className="text-xl">{item.nome}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.submenus.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton asChild>
                        <a href={subItem.url} className="text-lg">
                          <subItem.icon />
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }

        <Divider />
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">{projeto.nome}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projeto.projetos.map((pro, index) => (
                <CollapsibleItem key={index} index={index} pro={pro} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={'#'}>
                <span className="text-danger mx-auto">Sair</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

type TCollapsibleItem = {
  index: number;
  pro: {
    projeto: Project;
    listas: List[];
  }
}

const CollapsibleItem = (props: TCollapsibleItem) => {
  const { index, pro } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronDown className={`transition-all ${isOpen ? "rotate-180" : ""}`} />
            <span>{pro.projeto.name}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>

        {/* Botão do Dropdown colocado FORA do CollapsibleContent */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <SidebarMenuAction>
              <MoreHorizontal />
            </SidebarMenuAction>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-zinc-800 border rounded shadow-md z-40" side="right" align="start">
              <DropdownMenu.Item className="cursor-pointer px-2 py-1 hover:bg-zinc-700 hover:text-zinc-200 hover:border-none transition-all">
                Editar Projeto
              </DropdownMenu.Item>
              <DropdownMenu.Item className="cursor-pointer px-2 py-1 hover:bg-zinc-700 hover:text-zinc-200 hover:border-none transition-all">
                Excluir Projeto
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <CollapsibleContent>
          <SidebarMenuSub>
            {pro.listas.map((l) => (
              <SidebarMenuSubItem key={l.id}>
                <a href={`/project/${pro.projeto.id}/list/${l.id}`}>{l.name}</a>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

