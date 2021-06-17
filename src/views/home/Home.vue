<template>
 <div id="home">
  <nav-bar class="home-nav">
    <template #center>购物街</template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend :recommends="recommends"></home-recommend>
  <feature-view></feature-view>

  <tab-contral class="tab-contral" :title="['流行','新款','精选']"></tab-contral>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li>32</li>
    <li>33</li>
    <li>34</li>
    <li>35</li>
    <li>36</li>
    <li>37</li>
    <li>38</li>
    <li>39</li>
    <li>40</li>
    <li>41</li>
    <li>42</li>
    <li>43</li>
    <li>44</li>
    <li>45</li>
    <li>46</li>
    <li>47</li>
    <li>48</li>
    <li>49</li>
  </ul>
 </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import HomeSwiper from './childrenComponents/HomeSwiper.vue';
import HomeRecommend from './childrenComponents/HomeRecommend.vue';
import FeatureView from './childrenComponents/FeatureView.vue';
import TabContral from '../../components/common/tabcontral/TabContral.vue';

import {getHomeMultiDate,getHomeData} from "network/home"

export default {
   data () {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      };
   },

   components: {
     NavBar,HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabContral
   },
  created(){
    this.getHomeMultiDate()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
   computed: {},

   methods: {
     getHomeMultiDate(){
       getHomeMultiDate().then(res=>{
      this.banners = res.data.banner.list,
      this.recommends = res.data.recommend.list
      })
     },
     getHomeData(type){
       let page = this.goods[type].page + 1
       getHomeData(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          console.log(res);
          this.goods[type].page += 1
        }
       )
     }
   }
}
</script>
<style lang='css' scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color:#fff;
    background-color: pink;
    z-index: 9;
  }
  .tab-contral{
    position: sticky;
    top: 44px;
  }
</style>