from rest_framework import permissions

class UserAdminPermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if obj.user == request.user or request.user.is_superuser:
            return True
        return False
