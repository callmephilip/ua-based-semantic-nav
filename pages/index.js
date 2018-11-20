import React, {Component} from 'react'
import {UserAgent} from '@quentin-sommer/react-useragent'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import { DesktopContainer } from '../components/DesktopContainer'; 
import { MobileContainer } from '../components/MobileContainer';
import { Content } from '../components/Content'; 

class Index extends Component {
  render () {
    return (
      <div>
        <UserAgent computer>
          <DesktopContainer>
            <Content />
          </DesktopContainer>
        </UserAgent>
        <UserAgent mobile tablet>
          <MobileContainer>
            <Content />
          </MobileContainer>
        </UserAgent>
      </div>
    )
  }
}

export default Index
