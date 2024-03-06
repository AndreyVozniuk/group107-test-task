import { ReactNode, useState } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export interface AccordionProps {
  title: string
  content: ReactNode
}

const Container = styled('div')({
  backgroundColor: 'white',
  borderRadius: '0.75rem',
  padding: '1rem'
})

const Trigger = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer'
})

export function Accordion(props: AccordionProps) {

  const { title, content } = props

  const [ open, setOpen ] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <Trigger onClick={handleToggle}>
        <Typography style={{ userSelect: 'none' }}>{title}</Typography>
        {open ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </Trigger>
      {open && <Box marginTop='1rem'>{content}</Box>}
    </Container>
  )
}
