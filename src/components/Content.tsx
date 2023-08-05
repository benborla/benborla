import { cn } from '@/utils/utils'

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Content(props: Props) {
  return (
    <div className={cn("container grid items-center gap-6 pb-8 pt-6 md:py-10", props.className)}>
      <div className="flex flex-col items-center gap-2">
        {props.children}
      </div>
    </div>
  )
}
