from rest_framework.filters import SearchFilter
from rest_framework import status
from rest_framework.generics import (ListAPIView, RetrieveAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import *
from .serializers import *


class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

class CategoryListView(ListAPIView):
    queryset = Category.objects.filter(main_category=True).prefetch_related('nested_categories')
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'categories': serializer.data}, status=status.HTTP_200_OK)

class DiscountedGoodListView(ListAPIView):
    queryset = Good.objects.filter(discount__gt=0)
    serializer_class = GoodCardSerializer

class CartListView(ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)