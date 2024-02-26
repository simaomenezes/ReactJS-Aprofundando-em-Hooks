import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import * as zod from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Are you should info the task?'),
  minutesAmmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmmount: number
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmmount: 0,
    },
  })

  const id = String(new Date().getTime())
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 100)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmmount: data.minutesAmmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">I will work in</label>
          <TaskInput
            list="task-suggestions"
            type="text"
            id="task"
            placeholder="Do you should insert same thing"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 3" />
            <option value="Project 4" />
            <option value="Project 2" />
            <option value="Other things" />
          </datalist>

          <label htmlFor="minutesAmmount">Duration</label>
          <MinutesAmmountInput
            type="number"
            id="minutesAmmount"
            placeholder="0:0"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
