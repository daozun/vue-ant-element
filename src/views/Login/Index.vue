<template>
  <div class="login-container">
    <a-form ref="formRef" :model="formState" :rules="rules" class="login-form">
      <h2 class="title">后台登录</h2>

      <a-form-item name="name">
        <a-input v-model:value="formState.name" placeholder="admin">
          <template #prefix><UserOutlined style="color: #1890ff" /></template>
        </a-input>
      </a-form-item>

      <a-form-item name="password">
        <a-input v-model:value="formState.password" placeholder="123">
          <template #prefix><LockOutlined style="color: #1890ff" /></template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="onSubmit" block>登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

const router = useRouter();

const formRef = ref();

const formState = reactive({
  name: "admin",
  password: "123",
});

const rules = {
  name: {
    required: true,
    message: "请输入用户名",
  },
  password: {
    required: true,
    message: "请输入密码",
  },
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
      const newFormState = toRaw(formState);
      if (newFormState.name === "admin" && newFormState.password === "123") {
        router.push("/dashboard");
      }
    })
    .catch((error: Error) => {
      console.log("error", error);
    });
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;

  .login-form {
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;

    .title {
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: 700;
    }
  }
}
</style>
