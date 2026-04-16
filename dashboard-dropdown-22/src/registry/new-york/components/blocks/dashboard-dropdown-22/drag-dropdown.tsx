'use client'

import { useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'

import { GripVerticalIcon } from 'lucide-react'

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

import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const columns = [
  {
    id: '2-columns',
    name: '2 Columns',
    value: 2
  },
  {
    id: '4-columns',
    name: '4 Columns',
    value: 4
  },
  {
    id: '6-columns',
    name: '6 Columns',
    value: 6
  },
  {
    id: '8-columns',
    name: '8 Columns',
    value: 8
  }
]

const DragDropdown = ({ defaultOpen, align, trigger }: Props) => {
  const [selected, setSelected] = useState<string[]>(['4-columns', '6-columns'])
  const [columnOrder, setColumnOrder] = useState<string[]>(columns.map(column => column.id))

  const orderedColumns = columnOrder.map(id => columns.find(column => column.id === id)!).filter(Boolean)

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor), useSensor(TouchSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active && over && active.id !== over.id) {
      setColumnOrder(currentOrder => {
        const oldIndex = currentOrder.indexOf(active.id as string)
        const newIndex = currentOrder.indexOf(over.id as string)

        return arrayMove(currentOrder, oldIndex, newIndex)
      })
    }
  }

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-72.5 space-y-0.5 overflow-hidden' align={align || 'end'}>
        <DropdownMenuLabel className='text-muted-foreground font-normal'>Select Columns</DropdownMenuLabel>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={columnOrder} strategy={verticalListSortingStrategy}>
            {orderedColumns.map(column => (
              <SortableColumnItem
                key={column.id}
                column={column}
                isSelected={selected.includes(column.id)}
                onToggle={() => {
                  const isChecked = selected.includes(column.id)

                  if (!isChecked) {
                    setSelected([...selected, column.id])
                  } else {
                    setSelected(selected.filter(id => id !== column.id))
                  }
                }}
              />
            ))}
          </SortableContext>
        </DndContext>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type SortableColumnItemProps = {
  column: (typeof columns)[0]
  isSelected: boolean
  onToggle: () => void
}

const SortableColumnItem = ({ column, isSelected, onToggle }: SortableColumnItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column.id
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
      className='justify-between px-3 py-2.5 text-base [&>span]:hidden'
      onClick={e => {
        e.preventDefault()
        onToggle()
      }}
    >
      <div className='flex items-center gap-2'>
        <div>
          <Checkbox
            id={column.id}
            checked={isSelected}
            onCheckedChange={checked => {
              if (checked) {
                onToggle()
              } else {
                onToggle()
              }
            }}
          />
          <Label htmlFor={column.id} className='sr-only'>
            {column.name}
          </Label>
        </div>
        <span>{column.name}</span>
      </div>
      <div {...attributes} {...listeners} className='cursor-grab active:cursor-grabbing'>
        <GripVerticalIcon />
      </div>
    </DropdownMenuCheckboxItem>
  )
}

export default DragDropdown
