<template>
    <div id="app">
      <b-container>
        <b-navbar toggleable="lg">
          <b-navbar-brand to="/">Hello Master</b-navbar-brand>

            <b-navbar-nav>
              <b-nav-item-dropdown text="服务">
                <b-dropdown-item to="/product/chooseUni">择校</b-dropdown-item>
                <b-dropdown-item to="/product/personalStatement">文书写作</b-dropdown-item>
                <b-dropdown-item to="/product/application">申请</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="历年申请成绩">
                <b-dropdown-item to="/history/unitedKingdom">英国</b-dropdown-item>
                <b-dropdown-item to="/history/europe">欧洲</b-dropdown-item>
                <b-dropdown-item to="/history/australia">澳大利亚</b-dropdown-item>
                <b-dropdown-item to="/history/singapore">新加坡</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item-dropdown text="推荐有礼" right>
                <b-dropdown-item to="/">推荐有礼</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
      </b-container>

      <transition name="fade">
        <div class="gap">
          <router-view></router-view>
        </div>
      </transition>
      <br /><br /><br />
      <br /><br /><br />
    </div>
  </template>
