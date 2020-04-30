<template>
  <ha-scroll 
    :bgColor="['bgc-blue', 'bgc-black', 'bgc-red', 'bgc-orange']"
    :toTop="true"
    :toBottom="true"
  >
      <ha-rectangle height="1000px" width="1000px">
        <ha-card 
          :bgColor="['bgc-grey', 'bgc-grey', 'bgc-grey']"
          :hcfHeight="['10%','70%','20%']"
        >
          <h1 slot="header">狗屁不同文章生成器，主题Haru UI</h1>
          <p slot="content">
            <pre style="color:#fff">
                就我个人来说，Haru UI对我的意义，不能不说非常重大。 而这些并不是完全重要，
            更加重要的问题是， 笛卡儿说过一句富有哲理的话，我的努力求学没有得到别的好处，只
            不过是愈来愈发觉自己的无知。这句话语虽然很短，但令我浮想联翩。 

                Haru UI因何而发生？

                既然如此， 我们不得不面对一个非常尴尬的事实，那就是， 我们一般认为，抓住了
            问题的关键，其他一切则会迎刃而解。 本人也是经过了深思熟虑，在每个日日夜夜思考这
            个问题。 我认为， 鲁巴金曾经提到过，读书是在别人思想的帮助下，建立起自己的思想。
            这启发了我， 富兰克林曾经提到过，你热爱生命吗？那么别浪费时间，因为时间是组成生
            命的材料。这句话语虽然很短，但令我浮想联翩。 要想清楚，Haru UI，到底是一种怎么
            样的存在。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 

                可是，即使是这样，Haru UI的出现仍然代表了一定的意义。 现在，解决Haru UI的
            问题，是非常非常重要的。 所以， 一般来说， 而这些并不是完全重要，更加重要的问题
            是，生活中，若Haru UI出现了，我们就不得不考虑它出现了的事实。 这样看来， 对我个
            人而言， Haru UI不仅仅是一个重大的事件，还可能会改变我的人生。 
            </pre>
          </p>
          <p slot="footer">
            <pre style="color:#fff">
                那么， Haru UI，发生了会如何，不发生又会如何。 我们不得不面对一个非常尴尬的事
            实，那就是， 一般来说， 现在，解决Haru UI的问题，是非常非常重要的。 所以， 每个人
            都不得不面对这些问题。 在面对这种问题时， 总结的来说， 问题的关键究竟为何？ 可是，
            即使是这样，Haru UI的出现仍然代表了一定的意义。 达·芬奇曾经提到过，大胆和坚定的决
            心能够抵得上武器的精良。这句话语虽然很短，但令我浮想联翩。
            </pre>
          </p>
        </ha-card>
      </ha-rectangle>
  </ha-scroll>
</template>
<script>
import HaCard from '@containers/ha-card/HaCard.vue'
import HaRectangle from '@containers/ha-rectangle/HaRectangle.vue'
import HaButton from '@stuffings/ha-button/HaButton.vue'
import HaScroll from '@others/ha-scroll/HaScroll.vue'

export default {
  components: {
    [HaCard.name]: HaCard,
    [HaRectangle.name]: HaRectangle,
    [HaButton.name]: HaButton,
    [HaScroll.name]: HaScroll
  }
}
</script>