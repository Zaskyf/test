from django_filters import rest_framework as filters

from .models import Good


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class GoodFilter(filters.FilterSet):

    class Meta:
        model = Good
        fields =('category', 'price', 'discount')