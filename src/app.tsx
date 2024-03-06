import { Box } from '@mui/material'

import { AccordionList } from './components/accordion-list'

const ContentWithShortText = () => <div>crambled it to make a type specimen book.</div>
const ContentWithLongText = () => <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
const ContentWithTextAndImage = () => (
  <div>
    <img
      src='https://t4.ftcdn.net/jpg/05/52/90/43/360_F_552904388_7aUt5HQHVH1RygSp5UK2CTayhsxof7Ee.jpg'
      alt='Cool Image'
    />
    <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The.</div>
  </div>
)

const testData = [
  { title: 'Title 1', content: <ContentWithShortText /> },
  { title: 'Title 2', content: <ContentWithLongText /> },
  { title: 'Title 3', content: <ContentWithTextAndImage /> },
  { title: 'Title 4', content: <ContentWithShortText /> },
  { title: 'Title 5', content: <ContentWithShortText /> },
  { title: 'Title 6', content: <ContentWithLongText /> },
  { title: 'Title 7', content: <ContentWithTextAndImage /> },
  { title: 'Title 8', content: <ContentWithTextAndImage /> }
]

export function App() {
  return (
    <Box
      width='100vw'
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <AccordionList data={testData} />
    </Box>
  )
}

export default App
