import Button from 'components/base/Button'
import Input from 'components/base/Input'
import Span from 'components/base/Span'
import FlexBox from 'components/common/FlexBox'
import useInputRange from 'hooks/useInputRange'

export default function Player({}) {

  const handleInputChange = useInputRange()

  return (
    <FlexBox className='player h-[4rem] justify-center relative'>
      <FlexBox className='flex-col gap-2 '>
        <FlexBox className='gap-5'>
          <Button type='shuffle' className='text-white/30' iconSize={22} />
          <Button type='skipback' className='text-white/30' iconSize={22} />
          <Button
            type='pause'
            className='bg-white/30 rounded-full p-1 hover:scale-105'
            iconSize={24}
          />
          <Button type='skipforward' className='text-white/30' iconSize={22} />
          <Button type='repeat' className='text-white/30' iconSize={22} />
        </FlexBox>
        <FlexBox className='text-white/60 gap-2'>
          <Span className='text-xs'>-:--</Span>
          <Span className='w-52 h-1 rounded-full bg-white/30'></Span>
          <Span className='text-xs'>-:--</Span>
        </FlexBox>
      </FlexBox>
      <FlexBox className='text-white/60 absolute right-0 gap-3 p-3 '>
        <Button type='queue' iconSize={20} />
        <Button type='device' iconSize={20} />
        <Span className='flex items-center progress-bar'>
          <Button type='volume' iconSize={20} />
          <Input type='range' min='0' max='100' onChange={handleInputChange}/>
        </Span>
      </FlexBox>
    </FlexBox>
  )
}
