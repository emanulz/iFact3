# blog/dynamic_preferences_registry.py

from dynamic_preferences.types import BooleanPreference, StringPreference
from dynamic_preferences.preferences import Section
from dynamic_preferences.registries import global_preferences_registry
from dynamic_preferences.users.registries import user_preferences_registry

# we create some section objects to link related preferences together

general = Section('general')
discussion = Section('discussion')
admin = Section('admin')


# We start with a global preference
@global_preferences_registry.register
class SiteTitle(StringPreference):
    section = general
    name = 'title'
    default = 'My site'


@user_preferences_registry.register
class AdminLocked(BooleanPreference):
    section = admin
    name = 'is_admin_locked'
    default = False
