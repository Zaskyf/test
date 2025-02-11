from django.urls import path

from .views import *



urlpatterns = [
    # Категории
    path('api-category/', CategoryListView.as_view(), name='api-category'),
    # Категории 2
    path('api-category-detail/<int:id>/', CategoryDetailListView.as_view(), name='api-category-detail'),
    # Регистрация
    path('api-register/', UserCreateView.as_view(), name='api-register'),
    # Продукты со скидкой
    path('api-discounted-product/', DiscountedGoodListView.as_view(), name='api-discounted-product'),
    # О продукте
    path('api-good-detail/<int:id>/', GoodRetrieveView.as_view(), name='api-good-detail'),
    # Комментарии продукте
    path('api-review/<int:good_id>/', ReviewListView.as_view(), name='api-good-detail'),
    # Корзина
    path('api-cart/', CartListView.as_view(), name='api-cart'),
    # Добавление продукта в корзину
    path('api-add-good/', CartCreateView.as_view(), name='api-add-good'),
    # Редактирование корзины
    path('api-cart-detail/<int:id>/', CartRetrieveUpdateDestroyView.as_view(), name='api-cart-detail'),
]
