<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input type="text" :name="uniq" :id="uniq" :placeholder="placeholder" class="form-input" :class="theme" v-model="modelInput" :disabled="disabled">
  </div>
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },

        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: [String, Number],
            placeholder: {
                type: String,
                default: 'Placeholder'
            },
            uniq: {
                type: String,
                default: 'uniq'
            },
            label: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: ''
            }
        },

        computed: {
            modelInput: {
                get () {
                    return this.value;
                },
                set (val) {
                    this.$emit('change', val);
                }
            },
        }
    }
</script>

<style>

</style>
