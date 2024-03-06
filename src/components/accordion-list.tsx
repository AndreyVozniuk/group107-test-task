import { styled } from '@mui/system'
import Stack from '@mui/material/Stack'

import { Accordion, AccordionProps } from './accordion'

const Container = styled(Stack)({
  width: '50%',
  maxHeight: '90vh',
  overflow: 'auto',
  backgroundColor: 'darkgoldenrod',
  borderRadius: '0.35rem',
  padding: '1.5rem'
})

interface Props {

  data: AccordionProps[]
}

export function AccordionList(props: Props) {

  const { data } = props

  return (
    <Container spacing={2}>
      {data.map(props => <Accordion key={props.title} {...props} />)}
    </Container>
  )
}