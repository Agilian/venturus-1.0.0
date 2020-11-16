import React from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

interface BoxProps {
  name: string
  age: string
  nationality : string
}

export const Box: React.FC<BoxProps> = ({ name, age, nationality }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}, {age}, {nationality}
    </div>
  )
}