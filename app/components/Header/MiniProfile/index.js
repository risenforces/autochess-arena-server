import React from "react"
import { MiniProfileBlock } from "./Block"
import { MiniProfileAvatar } from "./Avatar"
import { MiniProfileInfo } from "./Info"
import { MiniProfileInfoUsername } from "./Info/Username"
import { MiniProfileInfoRank } from "./Info/Rank"
import { MiniProfileLoginButton } from "./LoginButton"
import { MiniProfileMenu } from "./Menu"
import { MiniProfileAvatarContainer } from "./AvatarContainer"

export class MiniProfile extends React.Component {
  state = {
    isMenuOpened: false
  }

  toggleMenu = () => {
    console.log("toggle")
    this.setState(prev => ({ isMenuOpened: !prev.isMenuOpened }))
  }
  openMenu = () => this.setState({ isMenuOpened: true })
  closeMenu = () => this.setState({ isMenuOpened: false })

  render() {
    const { isMenuOpened } = this.state
    const { user } = this.props

    if (!user)
      return (
        <MiniProfileLoginButton href="/login">Login</MiniProfileLoginButton>
      )

    const rankString = user.game.rank.string

    return (
      <MiniProfileBlock>
        <MiniProfileInfo>
          <MiniProfileInfoUsername>
            {user.steam.profile_name}
          </MiniProfileInfoUsername>
          <MiniProfileInfoRank rankString={rankString} />
        </MiniProfileInfo>
        <MiniProfileAvatarContainer
          onFocus={this.openMenu}
          onBlur={this.closeMenu}
          tabIndex="0"
        >
          <MiniProfileAvatar src={user.steam.avatar_url} draggable="false" />
          <MiniProfileMenu isOpen={isMenuOpened} />
        </MiniProfileAvatarContainer>
      </MiniProfileBlock>
    )
  }
}