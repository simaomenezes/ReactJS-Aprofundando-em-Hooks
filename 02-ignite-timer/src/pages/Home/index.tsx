import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work in</label>
          <TaskInput
            type="button"
            id="task"
            placeholder="Do you should inser same thing"
          />

          <label htmlFor="minutesAmmount">Duration</label>
          <MinutesAmmountInput
            type="button"
            id="minutesAmmount"
            placeholder="0:0"
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
