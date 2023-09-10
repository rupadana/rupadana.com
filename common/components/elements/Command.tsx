"use client"

import * as React from "react"
import { DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"


import clsxm from "@/common/libs/clsxm"
import { Dialog, DialogContent } from "./Dialog"
import { MENU_ITEMS, SOCIAL_MEDIA } from "@/common/constant/menu"
import Link from "next/link"
import { MenuItemProps } from "@/common/types/menu"
import { useCommand } from "@/context/command"

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={clsxm(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
            className
        )}
        {...props}
    />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps { }

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-lg border-0 dark:bg-black ">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    )
}

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
    <div className="flex items-center border-b dark:border-gray-700 px-3" cmdk-input-wrapper="">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <CommandPrimitive.Input
            ref={ref}
            className={clsxm(
                "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={clsxm("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
        {...props}
    />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="py-6 text-center text-sm"
        {...props}
    />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={clsxm(
            "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
            className
        )}
        {...props}
    />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={clsxm("-mx-1 h-px bg-border", className)}
        {...props}
    />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ children, className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={clsxm(
            "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-neutral-300 hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 hover:lg:rounded-lg  lg:transition-all lg:duration-300",
            className
        )}
        {...props}
    >
        {children}
    </CommandPrimitive.Item>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={clsxm(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    )
}
CommandShortcut.displayName = "CommandShortcut"


interface MenuItemPropsPrimitive {
    menu: MenuItemProps;
    onClick: () => void;
}

function MenuItem({ menu, onClick }: MenuItemPropsPrimitive) {
    const { href, icon, title, ...props } = menu;
    return (
        <Link href={href} {...props} onClick={() => onClick()}>
            <CommandItem>
                <div className="mr-3">{icon}</div>
                <span>{title}</span>
            </CommandItem>
        </Link>
    )
}

function CommandMenu() {
    const filteredMenu = MENU_ITEMS.filter(menu => menu.hideInCommand != true && menu.isShow != false)

    const filteredSocial = SOCIAL_MEDIA.filter(social => social.isShow);

    const { isOpen, toggleCommand, showCommand } = useCommand()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            console.log(e.key, e.ctrlKey, e.metaKey)
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                toggleCommand()
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={isOpen} onOpenChange={toggleCommand}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                    {
                        filteredMenu.map(menu => <MenuItem menu={menu} onClick={() => toggleCommand()} />)
                    }
                </CommandGroup>
                <CommandGroup heading="Social Media">
                    {
                        filteredSocial.map(menu => <MenuItem menu={menu} onClick={() => toggleCommand()} />)
                    }
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
    CommandMenu
}
