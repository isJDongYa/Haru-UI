<template>
  <ha-scroll :toBottom="true" :toTop="true" :color="['green', 'red', 'blue', 'yellow']">
      <ha-rectangle height='100%' width='100%'>
        <ha-coordinater :grid="[[1180, 50, 50], [580, 25, 50]]">
          <ha-rectangle :coor="[[[4,5], [42,42]], [[3,3], [19, 44]]]" hover="shadow">
            <ha-coordinater :grid="[[1180, 50, 50]]">
              <ha-rectangle :coor="[[[10,10], [5, 15]]]" hover="shadow">
                <ha-tooltip bgColor="red" location="bottom" tip="这是一个H" :wait="1000">
                  <ha-letter letter="H" :capital="true" fontColor="blue" :haShow="1180"></ha-letter>
                </ha-tooltip>
              </ha-rectangle>
              <ha-rectangle :coor="[[[14,10], [5, 15]]]">
                <ha-detailBox>
                  <ha-letter letter="a" :capital="false" fontColor="yellow"></ha-letter>
                </ha-detailBox>
                <ha-card width="200px" height="200px" :bgColor="['red','red']" data-detail-box="detailBox" letter="a" fontColor="blue">
                  dddd
                </ha-card>
              </ha-rectangle>
              <ha-rectangle :coor="[[[18,10], [5, 15]]]">
                <ha-letter letter="r" :capital="false" fontColor="green"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[22,10], [5, 15]]]">
                <ha-letter letter="u" :capital="false" fontColor="red"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[28,10], [5, 15]]]">
                <ha-letter letter="U" :capital="true" fontColor="orange"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[32,10], [5, 15]]]">
                <ha-letter letter="I" :capital="true" fontColor="purple"></ha-letter>
              </ha-rectangle>
              <ha-rectangle :coor="[[[22,28], [3, 2]]]" hover="shadow">
                <ha-button bgColor="blue" title="开始" @click="$router.push('/haru-ui')"></ha-button>
              </ha-rectangle>
            </ha-coordinater>
          </ha-rectangle>
        </ha-coordinater>
      </ha-rectangle>
  </ha-scroll> 
</template>
