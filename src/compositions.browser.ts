/**
 * Component families mounted the way they are actually used.
 *
 * Most of gooey's exports are sub-components that read a parent's injected
 * context — `AccordionItem` outside `Accordion` throws, and testing it bare
 * would be meaningless. mount-cases.ts lists each of those with the parent it
 * belongs to; this file is where they get their coverage, composed.
 *
 * A composition failing tells you something a bare mount cannot: that the parts
 * no longer fit together.
 */
import { defineComponent } from "vue"
import { expect, test } from "vitest"
import { cleanup, render } from "vitest-browser-vue"
import * as gooey from "@/index"

const mount = (template: string) => {
  const errors: string[] = []

  try {
    render(defineComponent({ components: gooey as never, template }) as never, {
      global: {
        config: {
          errorHandler: (error: unknown) => errors.push(String((error as Error)?.message ?? error)),
        },
      },
    })
  } catch (error) {
    errors.push(String((error as Error)?.message ?? error))
  } finally {
    cleanup()
  }

  return errors
}

const COMPOSITIONS: Record<string, string> = {
  Accordion: `
    <Accordion type="single" collapsible>
      <AccordionItem value="a">
        <AccordionTrigger>Trigger</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>
    </Accordion>`,

  Avatar: `<Avatar><AvatarImage src="" alt="" /><AvatarFallback>GG</AvatarFallback></Avatar>`,

  Collapsible: `
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>Body</CollapsibleContent>
    </Collapsible>`,

  Tabs: `
    <Tabs default-value="one">
      <TabsList><TabsTrigger value="one">One</TabsTrigger></TabsList>
      <TabsContent value="one">Panel</TabsContent>
    </Tabs>`,

  Select: `
    <Select>
      <SelectTrigger><SelectValue placeholder="Pick" /></SelectTrigger>
      <SelectContent><SelectItem value="a">A</SelectItem></SelectContent>
    </Select>`,

  Dialog: `
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription></DialogHeader>
        <DialogFooter><DialogClose>Close</DialogClose></DialogFooter>
      </DialogContent>
    </Dialog>`,

  AlertDialog: `
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Title</AlertDialogTitle>
        <AlertDialogDescription>Description</AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Go</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>`,

  DropdownMenu: `
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuCheckboxItem>Check</DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>Sub</DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>`,

  ContextMenu: `
    <ContextMenu>
      <ContextMenuTrigger>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item</ContextMenuItem>
        <ContextMenuCheckboxItem>Check</ContextMenuCheckboxItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
          <ContextMenuSubContent>Sub</ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>`,

  Popover: `<Popover><PopoverTrigger>Open</PopoverTrigger><PopoverContent>Body</PopoverContent></Popover>`,

  HoverCard: `<HoverCard><HoverCardTrigger>Hover</HoverCardTrigger><HoverCardContent>Body</HoverCardContent></HoverCard>`,

  // Tooltip needs a provider above it; without one reka-ui throws on the
  // missing TooltipProviderContext.
  Tooltip: `
    <TooltipProvider>
      <Tooltip><TooltipTrigger>Hover</TooltipTrigger><TooltipContent>Tip</TooltipContent></Tooltip>
    </TooltipProvider>`,

  RadioGroup: `<RadioGroup default-value="a"><RadioGroupItem value="a" /></RadioGroup>`,

  Pagination: `
    <Pagination :total="100" :items-per-page="10">
      <PaginationContent>
        <PaginationFirst /><PaginationPrevious />
        <PaginationItem :value="1">1</PaginationItem>
        <PaginationNext /><PaginationLast />
      </PaginationContent>
    </Pagination>`,

  Stepper: `
    <Stepper>
      <StepperItem :step="1">
        <StepperTrigger><StepperIndicator /></StepperTrigger>
        <StepperTitle>Title</StepperTitle>
        <StepperDescription>Description</StepperDescription>
        <StepperSeparator />
      </StepperItem>
    </Stepper>`,

  ToggleGroup: `<ToggleGroup type="single"><ToggleGroupItem value="a">A</ToggleGroupItem></ToggleGroup>`,

  TagsInput: `
    <TagsInput :model-value="['one']">
      <TagsInputItem value="one"><TagsInputItemText /><TagsInputItemDelete /></TagsInputItem>
      <TagsInputInput placeholder="Add" />
    </TagsInput>`,

  NumberField: `
    <NumberField>
      <NumberFieldContent>
        <NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>`,

  ScrollArea: `<ScrollArea><ScrollBar /></ScrollArea>`,

  Sheet: `
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent><SheetTitle>Title</SheetTitle><SheetDescription>Body</SheetDescription>
      <SheetClose>Close</SheetClose></SheetContent>
    </Sheet>`,
}

for (const [family, template] of Object.entries(COMPOSITIONS)) {
  test(`${family} composes`, () => {
    expect(mount(template), `${family} errored while composing`).toEqual([])
  })
}
