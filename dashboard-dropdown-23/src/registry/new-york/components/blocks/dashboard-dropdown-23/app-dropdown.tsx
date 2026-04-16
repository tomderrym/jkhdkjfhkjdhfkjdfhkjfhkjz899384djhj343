'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'

import { CheckIcon, ChevronDownIcon, CirclePlusIcon, GripVerticalIcon } from 'lucide-react'

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core'
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
  data: {
    id: number
    name: string
    email: string
    image: string
  }[]
}

const AppWorkspaceDropdown = ({ defaultOpen, align = 'end', data }: Props) => {
  const [activeApp, setActiveApp] = useState<number | null>(data[1].id)
  const [appOrder, setAppOrder] = useState<number[]>(data.map(app => app.id))

  const orderedApps = appOrder.map(id => data.find(app => app.id === id)!).filter(Boolean)

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor), useSensor(TouchSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active && over && active.id !== over.id) {
      setAppOrder(currentOrder => {
        const oldIndex = currentOrder.indexOf(active.id as number)
        const newIndex = currentOrder.indexOf(over.id as number)

        return arrayMove(currentOrder, oldIndex, newIndex)
      })
    }
  }

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' className='h-fit px-4 py-2.5 font-normal'>
          {activeApp ? (
            <>
              <img src={data.find(app => app.id === activeApp)?.image || ''} alt='App' className='w-6' />
              <div>
                <span className='text-base font-medium'>{data.find(app => app.id === activeApp)?.name || ''}</span>
              </div>
            </>
          ) : (
            <div>
              <span className='text-base font-medium'>Select an app</span>
            </div>
          )}
          <ChevronDownIcon className='size-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-87.5 space-y-0.5' align={align || 'end'}>
        <DropdownMenuLabel className='flex items-center justify-between'>
          <span>{activeApp ? data.find(app => app.id === activeApp)?.email || '' : 'No app selected'}</span>
          <Button variant='ghost' className='h-7 px-2 py-1 text-sm' onClick={() => setActiveApp(null)}>
            Sign out
          </Button>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={appOrder} strategy={verticalListSortingStrategy}>
            <div className='space-y-0.5'>
              {orderedApps.map(app => (
                <SortableAppItem
                  key={app.id}
                  app={app}
                  isActive={activeApp === app.id}
                  onSelect={() => setActiveApp(app.id)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        <DropdownMenuSeparator />

        <DropdownMenuItem className='hover:bg-primary/10 text-popover-foreground justify-center font-medium'>
          <CirclePlusIcon className='text-primary' />
          <span>Add another project</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type SortableAppItemProps = {
  app: Props['data'][0]
  isActive: boolean
  onSelect: () => void
}

const SortableAppItem = ({ app, isActive, onSelect }: SortableAppItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: app.id
  })

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1
  }

  return (
    <DropdownMenuCheckboxItem
      ref={setNodeRef}
      style={style}
      className='data-[state=checked]:bg-muted gap-4 px-4 py-2.5 [&>span]:hidden'
      checked={isActive}
      onCheckedChange={onSelect}
      onClick={e => {
        e.preventDefault()
        onSelect()
      }}
    >
      <div className='flex items-center gap-4'>
        <div {...attributes} {...listeners} className='cursor-grab active:cursor-grabbing'>
          <GripVerticalIcon className='text-muted-foreground size-5' />
        </div>
        <img src={app.image} alt={app.name} className='w-6' />
        <span className='text-base font-medium'>{app.name}</span>
      </div>
      {isActive && <CheckIcon className='ml-auto size-5' />}
    </DropdownMenuCheckboxItem>
  )
}

export default AppWorkspaceDropdown
