import './styles/invitation.css'

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="invitation-root">
      {children}
    </div>
  )
}
