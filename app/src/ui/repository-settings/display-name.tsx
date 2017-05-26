import * as React from 'react'
import { TextBox } from '../lib/text-box'
import { DialogContent } from '../dialog'

interface RepositoryProps {
  /** The repository name being shown. */
  readonly text: string | null
  readonly onDisplayNameChanged: (name: string) => void
}

/** The name component. */
export class DisplayName extends React.Component<RepositoryProps, void> {
  public render() {
    return (
      <DialogContent>
        <div>Repository display name (local only)</div>
        <TextBox placeholder='Display Name' value={this.props.text || ''} onChange={this.onChange}/>
      </DialogContent>
    )
  }

  private onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value
    this.props.onDisplayNameChanged(name)
  }
}
