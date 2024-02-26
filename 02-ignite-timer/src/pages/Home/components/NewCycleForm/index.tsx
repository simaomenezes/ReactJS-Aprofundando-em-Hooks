import { FormContainer, TaskInput, MinutesAmmountInput } from './styles'

export function NewCycleForm() {
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
