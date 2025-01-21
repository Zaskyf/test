from django.urls import path

from .views import *



urlpatterns = [
    # Категории
    path('api-category/', CategoryListView.as_view(), name='api-category'),
    # Регистрация
    path('api-register/', UserCreateView.as_view(), name='api-register'),
    # Продукты со скидкой
    path('api-discounted-product/', DiscountedGoodListView.as_view(), name='api-discounted-product')
]