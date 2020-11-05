<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">UI Компоненты</h1>

    <!-- Карточки товаров -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('Cards')">Карточки товаров</h2>
      <div v-if="has('Cards')" class="content">
        <hr>
        <div class="grid gtc3 aifs ggap3">
          <span v-for="(item, i) of stepData" :key="i">
            <h2 class="flex aic jcsb">
              ApartItem
              <button v-clipboard="'<ApartItem :item=&quot;item&quot; />'">copy</button>
            </h2>
            <ApartItem :item="item" />
          </span>
          <span v-for="(item, i) of stepData" :key="'ApartMinItem'+i">
            <h2 class="flex aic jcsb">
              ApartMinItem
              <button v-clipboard="'<ApartMinItem :item=&quot;item&quot; />'">copy</button>
            </h2>
            <ApartMinItem :item="item" />
          </span>
        </div>

        <hr>

        <div class="grid gtc3 aifs ggap3">
          <span v-for="(item, i) of stepData" :key="'HotelItem'+i">
            <h2 class="flex aic jcsb">
              HotelItem
              <button v-clipboard="'<HotelItem :item=&quot;item&quot; />'">copy</button>
            </h2>
            <HotelItem
              :item="item"
            />
          </span>

          <span v-for="(item, i) of stepData" :key="'HotelMinItem'+i">
            <h2 class="flex aic jcsb">
              HotelMinItem
              <button v-clipboard="`<HotelMinItem :item=&quot;item&quot;>
              <div class=&quot;flex aic&quot;>
                <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-1&quot;></use></svg>
                x 1
              </div>
              <span class=&quot;fs12&quot;>
                For <b>1 person</b>
              </span>
            </HotelMinItem>`">copy</button>
            </h2>
            <HotelMinItem :item="item">
              <div class="flex aic">
                <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-1"></use></svg>
                x 1
              </div>
              <span class="fs12">
                For <b>1 person</b>
              </span>
            </HotelMinItem>
          </span>

          <span v-for="(item, i) of stepData" :key="'HotelMinItem2'+i">
            <h2 class="flex aic jcsb">
              HotelMinItem
              <button v-clipboard="`<HotelMinItem :item=&quot;item&quot;>
              <div class=&quot;flex ggap1&quot;>
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-2&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 1</span>
                </span>
                or
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-1&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 2</span>
                </span>
              </div>
              <span class=&quot;fs12&quot;>
                For <b>2 person</b>
              </span>
            </HotelMinItem>`">copy</button>
            </h2>
            <HotelMinItem :item="item">
              <div class="flex ggap1">
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-2"></use></svg>
                  <span class="fs14">x 1</span>
                </span>
                or
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-1"></use></svg>
                  <span class="fs14">x 2</span>
                </span>
              </div>
              <span class="fs12">
                For <b>2 person</b>
              </span>
            </HotelMinItem>
          </span>
          
          <span v-for="(item, i) of stepData" :key="'HotelMinItem3'+i">
            <h2 class="flex aic jcsb">
              HotelMinItem
              <button v-clipboard="`<HotelMinItem :item=&quot;item&quot;>
              <div class=&quot;flex ggap1&quot;>
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-2&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 1</span>
                </span>
                or
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-1&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 1</span>
                </span>
              </div>
              <span class=&quot;fs12&quot;>
                For <b>3 person</b>
              </span>
            </HotelMinItem>`">copy</button>
            </h2>
            <HotelMinItem :item="item">
              <div class="flex ggap1">
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-2"></use></svg>
                  <span class="fs14">x 1</span>
                </span>
                or
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-1"></use></svg>
                  <span class="fs14">x 1</span>
                </span>
              </div>
              <span class="fs12">
                For <b>3 person</b>
              </span>
            </HotelMinItem>
          </span>
          
          <span v-for="(item, i) of stepData" :key="'HotelMinItem4'+i">
            <h2 class="flex aic jcsb">
              HotelMinItem
              <button v-clipboard="`<HotelMinItem :item=&quot;item&quot;>
              <div class=&quot;flex ggap1&quot;>
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-2&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 2</span>
                </span>
                or
                <span class=&quot;flex aic&quot;>
                  <svg class=&quot;ic20 icblack3 mr05&quot;><use xlink:href=&quot;@/assets/icons/room.svg#bed-1&quot;></use></svg>
                  <span class=&quot;fs14&quot;>x 4</span>
                </span>
              </div>
              <span class=&quot;fs12&quot;>
                For <b>4 person</b>
              </span>
            </HotelMinItem>`">copy</button>
            </h2>
            <HotelMinItem :item="item">
              <div class="flex ggap1">
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-2"></use></svg>
                  <span class="fs14">x 2</span>
                </span>
                or
                <span class="flex aic">
                  <svg class="ic20 icblack3 mr05"><use xlink:href="@/assets/icons/room.svg#bed-1"></use></svg>
                  <span class="fs14">x 4</span>
                </span>
              </div>
              <span class="fs12">
                For <b>4 person</b>
              </span>
            </HotelMinItem>
          </span>
          
          <span v-for="(item, i) of stepData" :key="'HotelMinItem5'+i">
            <h2 class="flex aic jcsb">
              HotelMinItem
              <button v-clipboard="`<HotelMinItem :item=&quot;item&quot;>
              <div class=&quot;flex&quot;>
                <span class=&quot;grid-desc&quot;>
                  <div class=&quot;fs10&quot;>Junior S</div>
                  <small class=&quot;fs12&quot;>{{ item.apartment.area }} m²</small>
                </span>
                <span class=&quot;vertical-hr mr05 ml05&quot;></span>
                <span class=&quot;grid-desc&quot;>
                  <div class=&quot;fs10&quot;>Posti letto</div>
                  <small class=&quot;fs12&quot;>max {{ item.apartment.count_person }}</small>
                </span>
                <span class=&quot;vertical-hr mr05 ml05&quot;></span>
                <span class=&quot;grid-desc&quot;>
                  <div class=&quot;fs10&quot;>Bagni</div>
                  <small class=&quot;fs12&quot;>{{ item.apartment.count_bathroom }}</small>
                </span>
              </div>
            </HotelMinItem>`">copy</button>
            </h2>
            <HotelMinItem :item="item">
              <div class="flex">
                <span class="grid-desc">
                  <div class="fs10">Junior S</div>
                  <small class="fs12">{{ item.apartment.area }} m²</small>
                </span>
                <span class="vertical-hr mr05 ml05"></span>
                <span class="grid-desc">
                  <div class="fs10">Posti letto</div>
                  <small class="fs12">max {{ item.apartment.count_person }}</small>
                </span>
                <span class="vertical-hr mr05 ml05"></span>
                <span class="grid-desc">
                  <div class="fs10">Bagni</div>
                  <small class="fs12">{{ item.apartment.count_bathroom }}</small>
                </span>
              </div>
            </HotelMinItem>
          </span>
        </div>
      </div>
    </section>

    <!-- Карточки категорий -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('Categs')">Карточки категорий</h2>
      <div v-if="has('Categs')" class="content">
        <hr>
        <span>
          <h2 class="flex aic jcsb">
            CategoryItem
            <button v-clipboard="`<CategoryItem 
            v-for=&quot;(cat, i) of categories&quot; 
            :key=&quot;i&quot;
            :item=&quot;cat&quot;
            v-model=&quot;modelValue[modelValue.length - 1].category&quot;
          />`">copy</button>
          </h2>
          <div class="grid gtc4 ggap2 aifs">
            <CategoryItem 
              v-for="(cat, i) of categories" 
              :key="i"
              :item="cat"
            />
          </div>
        </span>

        <hr>

        <span>
          <h2 class="flex aic jcsb">
            SubCategoryItem
            <button v-clipboard="`<SubCategoryItem 
            v-for=&quot;(cat, i) of categories&quot; 
            :key=&quot;i&quot;
            :item=&quot;cat&quot;
            v-model=&quot;modelValue[modelValue.length - 1].category&quot;
          />`">copy</button>
          </h2>
          <div class="grid gtc4 ggap2 aifs">
            <SubCategoryItem 
              v-for="(cat, i) of subCategories" 
              :key="i"
              :item="cat"
            />
          </div>
        </span>
        
        <hr>

        <span>
          <h2 class="flex aic jcsb">
            SubSubCategoryItem
            <button v-clipboard="`<SubSubCategoryItem 
            v-for=&quot;(cat, i) of categories&quot; 
            :key=&quot;i&quot;
            :item=&quot;cat&quot;
            v-model=&quot;modelValue[modelValue.length - 1].category&quot;
          />`">copy</button>
          </h2>
          <div class="grid gtc3 ggap2 aifs">
            <SubSubCategoryItem 
              v-for="(cat, i) of subCategories" 
              :key="i"
              :item="cat"
            />
          </div>
        </span>
      </div>
    </section>

  </div>
</template>

<script>
import ApartItem from '@/components/items/ApartItem'
import ApartMinItem from '@/components/items/ApartMinItem'
import HotelItem from '@/components/items/HotelItem'
import HotelMinItem from '@/components/items/HotelMinItem'
import CategoryItem from '@/components/items/CategoryItem'
import SubCategoryItem from '@/components/items/SubCategoryItem'
import SubSubCategoryItem from '@/components/items/SubSubCategoryItem'
export default {
  components: {
    ApartItem,
    ApartMinItem,
    HotelItem,
    HotelMinItem,
    CategoryItem,
    SubCategoryItem,
    SubSubCategoryItem
  },

  data: () => ({
    stepData: JSON.parse(localStorage.getItem('stepData')),

    categories: [
      {
        id: 1,
        img: require('@/assets/img/categories/hotel.jpg'),
        icon: 'hotel',
        name: {
          en:"Hotels",
          ru:"Жильё"
        },
        description: {
          en:"chalets, B&B, appartmensts e allogio alle persone",
          ru:"Жильё, жилище, проживание"
        },
        slug:"accomodation"
      },
      {
        id: 2,
        img: require('@/assets/img/categories/hotel.jpg'),
        icon: 'bar',
        name: {
          en:"Restaurants",
          ru:"Жильё"
        },
        description: {
          en:"bar, pubs, night life",
          ru:"Жильё, жилище, проживание"
        },
        slug:"accomodation"
      }
    ],
    subCategories: [
      {
        id: 1,
        img: require('@/assets/img/categories/hotel.jpg'),
        icon: 'hotel-big',
        name: {
          en:"Hotel, B&B Affitacamere",
          ru:"Жильё"
        },
        description: {
          en:"Strutture di tipo alberghi, Affittacamere, Ostelli, Rifugi alpini etc.",
          ru:"Жильё, жилище, проживание"
        },
        slug:"accomodation"
      },
      {
        id: 2,
        img: require('@/assets/img/categories/hotel.jpg'),
        icon: 'apartment-big',
        name: {
          en:"Uno o piu Apartamenti",
          ru:"Жильё"
        },
        description: {
          en:"Appartamento arredato con cucina che si può affittare per 1 giorno, weekend o settimana.",
          ru:"Жильё, жилище, проживание"
        },
        slug:"accomodation"
      }
    ]
  })
}
</script>

<style>

</style>
