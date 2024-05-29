export default function AuthWithLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        {children}
        <h2>Inner layout</h2>
    </div>
  )
}
