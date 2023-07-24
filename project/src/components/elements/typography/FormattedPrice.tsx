interface ComponentProps {
  value: number
}

export default function FormattedPrice({ value }: ComponentProps) {
  return <>{`¥ ${value.toLocaleString()}`}</>
}
