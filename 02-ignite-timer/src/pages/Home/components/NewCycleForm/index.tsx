import { useForm } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmmountInput } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Are you should info the task?'),
  minutesAmmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        list="task-suggestions"
        type="text"
        id="task"
        placeholder="Do you should insert same thing"
        {...register('task')}
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
