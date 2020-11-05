<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Элементы формы
      <span class="fs14">assets/css/forms.scss</span>
    </h1>
    
    <section class="mb1 doc-section p2" v-for="(item, i) of list" :key="i">
      <h2 class="m0 toggler" @click="toggler(item.name)">{{ item.name }}</h2>
      <div v-if="has(item.name)" class="content">
        <hr>
        <div v-if="item.desc" class="mb2" v-html="item.desc"></div>
        <div class="mb2">
          <component :is="item.component" v-model="test" />
        </div>
        <div class="tabl mb2 ">
          
          <div class="tabl-caption">
            <span>props</span>
            <span>type</span>
            <span>default</span>
            <span>описание</span>
          </div>
          <div class="tabl-row" v-for="(row, index) of item.props" :key="'row_'+index">
            <span>{{ row.name }}</span>
            <span>{{ row.type }}</span>
            <span>{{ row.default }}</span>
            <span>{{ row.desc }}</span>
          </div>

        </div>
        <div class="grid">
          <SshPre class="m0" language="js" :dark="true" :copy-button="true">{{ item.code }}</SshPre>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mixins: ['docMixin'],
  data: () => ({
    test: 0,
    list: [
      {
        name: 'InputText',
        component: () => import('@/components/ui/forms/InputText.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'placeholder',
            type: 'String',
            default: 'placeholder',
            desc: 'Подсказка'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'String, Number',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputText
  uniq="uniq_name"
  :label="$t('label__name')"
  :placeholder="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputEmail',
        component: () => import('@/components/ui/forms/InputEmail.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'placeholder',
            type: 'String',
            default: 'placeholder',
            desc: 'Подсказка'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'String',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputEmail
  uniq="uniq_name"
  :label="$t('label__name')"
  :placeholder="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputPassword',
        component: () => import('@/components/ui/forms/InputPassword.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'placeholder',
            type: 'String',
            default: 'placeholder',
            desc: 'Подсказка'
          },
          {
            name: 'isRepass',
            type: 'Boolean',
            default: 'false',
            desc: 'Показывать второе поле'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'String',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputPassword
  uniq="uniq_name"
  :label="$t('label__name')"
  :placeholder="$t('label__name')"
  :isRepass="true"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputNumber',
        component: () => import('@/components/ui/forms/InputNumber.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'placeholder',
            type: 'String',
            default: 'placeholder',
            desc: 'Подсказка'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'Number',
            default: '0',
            desc: '-'
          },
        ],
        code:`&lt;InputNumber
  uniq="uniq_name"
  :label="$t('label__name')"
  :placeholder="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputCounter',
        component: () => import('@/components/ui/forms/InputCounter.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'value',
            type: 'Number',
            default: '0',
            desc: '-'
          },
        ],
        code:`&lt;InputCounter
  uniq="uniq_name"
  :label="$t('count_label')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputRange',
        component: () => import('@/components/ui/forms/InputRange.vue'),
        props: [
          {
            name: 'step',
            type: 'Number',
            default: '0',
            desc: 'Кол-во шагов за раз'
          },
          {
            name: 'min',
            type: 'Number',
            default: '0',
            desc: 'Минимальное значение'
          },
          {
            name: 'max',
            type: 'Number',
            default: '5',
            desc: 'Максимальное значение'
          },
          {
            name: 'ticks',
            type: 'Array',
            default: '[]',
            desc: 'Массив тиков для отображения снизу'
          },
          {
            name: 'value',
            type: 'Number',
            default: '0',
            desc: '-'
          },
        ],
        code:`&lt;InputRange
  :step="1"
  :min="0"
  :max="5"
  :ticks="[
    {
      id: 1,
      name: '1'
    },
    {
      id: 2,
      name: '2'
    },
    {
      id: 3,
      name: '3'
    },
    {
      id: 4,
      name: '4'
    },
    {
      id: 5,
      name: '5'
    },
    {
      id: 6,
      name: '5 lux'
    }
  ]"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputTextarea',
        component: () => import('@/components/ui/forms/InputTextarea.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'placeholder',
            type: 'String',
            default: 'placeholder',
            desc: 'Подсказка'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'String',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputTextarea
  uniq="uniq_name"
  :label="$t('label__name')"
  :placeholder="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputSelect',
        component: () => import('@/components/ui/forms/InputSelect.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'list',
            type: 'Array',
            default: '[]',
            desc: 'Список опций'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            desc: 'Только для чтения'
          },
          {
            name: 'value',
            type: 'String, Number',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputSelect
  uniq="uniq_name"
  :label="$t('label__name')"
  :list="list"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputRadio',
        component: () => import('@/components/ui/forms/InputRadio.vue'),
        desc: 'Клас для списка <b>form-list</b>',
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'name',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'val',
            type: 'String, Number, Object',
            default: '-',
            desc: 'Значение если тип Boolean'
          },
          {
            name: 'value',
            type: 'String, Number, Object',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputRadio
  name="uniq_name[]"
  uniq="uniq_name"
  :val="'str, bool, num'"
  :label="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputRadioIcon',
        component: () => import('@/components/ui/forms/InputRadioIcon.vue'),
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'name',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'icon',
            type: 'String',
            default: 'plus',
            desc: 'Название иконки'
          },
          {
            name: 'val',
            type: 'String, Number, Object',
            default: '-',
            desc: 'Значение если тип Boolean'
          },
          {
            name: 'value',
            type: 'String, Number, Object',
            default: '{}',
            desc: '-'
          },
        ],
        code:`&lt;InputRadioIcon
  name="uniq_name[]"
  uniq="uniq_name"
  :val="'str, bool, num'"
  :label="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputCheck',
        component: () => import('@/components/ui/forms/InputCheck.vue'),
        desc: 'Клас для списка <b>form-list</b>',
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'name',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'val',
            type: 'String, Number, Boolean, Object',
            default: '-',
            desc: 'Значение если тип Boolean'
          },
          {
            name: 'value',
            type: 'Array, Boolean',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputCheck
  name="uniq_name[]"
  uniq="uniq_name"
  :val="'str, bool, num'"
  :label="$t('label__name')"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputCheckIcon',
        component: () => import('@/components/ui/forms/InputCheckIcon.vue'),
        desc: 'Клас для списка <b>form-list</b>',
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'labelclass',
            type: 'String',
            default: '-',
            desc: 'Клас для label тега'
          },
          {
            name: 'name',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'icon',
            type: 'String',
            default: 'plus',
            desc: 'Название иконки'
          },
          {
            name: 'val',
            type: 'String, Number, Boolean, Object',
            default: '-',
            desc: 'Значение'
          },
          {
            name: 'value',
            type: 'Array, Boolean, Object',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputCheckIcon
  name="options[]"
  :key="'option_'+i"
  :label="item.name"
  :icon="item.icon"
  :uniq="'option_'+i"
  :val="item"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
      {
        name: 'InputSwitcher',
        component: () => import('@/components/ui/forms/InputSwitcher.vue'),
        desc: 'Клас для списка <b>form-list</b><br>Класс для направления <b>form-direction-rtl</b> (right to left) с права на лево',
        props: [
          {
            name: 'label',
            type: 'String',
            default: 'label',
            desc: 'Название поля'
          },
          {
            name: 'name',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'uniq',
            type: 'String',
            default: 'uniq_name',
            desc: 'Уникальное имя'
          },
          {
            name: 'val',
            type: 'String, Boolean, Object',
            default: '-',
            desc: 'Значение'
          },
          {
            name: 'value',
            type: 'Array, String, Boolean, Object',
            default: '-',
            desc: '-'
          },
        ],
        code:`&lt;InputSwitcher
  label="Switcher label"
  name="switcher[]"
  uniq="switcher"
  :val="'switcher'"
  v-model="modelValue[modelValue.length - 1].key"
/&gt;`
      },
    ]
  })
}
</script>
